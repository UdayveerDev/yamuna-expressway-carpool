// bookingController.js for Yamuna Expressway Carpooling System

// Function to create a booking
async function createBooking(customerId, vehicleId, seatsRequested) {
    // Logic to check seat availability
    const availableSeats = await checkSeatAvailability(vehicleId);
    if (availableSeats < seatsRequested) {
        throw new Error('Not enough seats available');
    }

    // Calculate fare based on seats and other factors
    const fare = calculateFare(seatsRequested);

    // Create booking in database
    const booking = await BookingModel.create({
        customerId,
        vehicleId,
        seats: seatsRequested,
        fare
    });

    return booking;
}

// Function to get all bookings for a customer
async function getCustomerBookings(customerId) {
    return await BookingModel.find({ customerId });
}

// Function to get a specific booking by ID
async function getBookingById(bookingId) {
    return await BookingModel.findById(bookingId);
}

// Function to confirm a booking and update vehicle seats
async function confirmBooking(bookingId) {
    const booking = await getBookingById(bookingId);
    if (!booking) {
        throw new Error('Booking not found');
    }
    // Logic to confirm booking and adjust vehicle seats
    await VehicleModel.updateOne({ _id: booking.vehicleId }, { $inc: { availableSeats: -booking.seats } });
    booking.status = 'confirmed';
    return await booking.save();
}

// Function to cancel a booking and restore seats
async function cancelBooking(bookingId) {
    const booking = await getBookingById(bookingId);
    if (!booking) {
        throw new Error('Booking not found');
    }
    // Logic to restore vehicle seats
    await VehicleModel.updateOne({ _id: booking.vehicleId }, { $inc: { availableSeats: booking.seats } });
    booking.status = 'cancelled';
    return await booking.save();
}

// Function to get all bookings for a driver
async function getDriverBookings(driverId) {
    return await BookingModel.find({ driverId });
}

// Utility functions
function checkSeatAvailability(vehicleId) {
    // Placeholder for seat availability logic
    // Assume we return available seats
    return VehicleModel.findById(vehicleId).then(vehicle => vehicle.availableSeats);
}

function calculateFare(seatsRequested) {
    const farePerSeat = 100; // Example fare rate
    return seatsRequested * farePerSeat;
}

module.exports = {
    createBooking,
    getCustomerBookings,
    getBookingById,
    confirmBooking,
    cancelBooking,
    getDriverBookings
};