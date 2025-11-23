/**
 * Utility functions for date handling in the Advent Calendar
 */

/**
 * Check if a specific day can be opened based on current date
 * @param {number} day - Day number (1-24)
 * @param {number} year - Year (e.g., 2025)
 * @param {number} month - Month (0-11, where 11 is December)
 * @returns {boolean} - True if the day can be opened
 */
export const canOpenDay = (day, year = 2025, month = 11) => {
  // DEMO MODE: Set to true to allow all days to be opened for testing
  const DEMO_MODE = false;
  
  if (DEMO_MODE) return true;
  
  const now = new Date();
  const targetDate = new Date(year, month, day);
  
  // Can open if current date is on or after the target date
  return now >= targetDate;
};

/**
 * Format date for display
 * @param {number} day - Day number
 * @param {number} month - Month (0-11)
 * @returns {string} - Formatted date string
 */
export const formatDate = (day, month = 11) => {
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return `${day} de ${monthNames[month]}`;
};

/**
 * Get days until a specific date can be opened
 * @param {number} day - Day number
 * @param {number} year - Year
 * @param {number} month - Month (0-11)
 * @returns {number} - Days remaining (0 if can open)
 */
export const getDaysUntil = (day, year = 2025, month = 11) => {
  const now = new Date();
  const targetDate = new Date(year, month, day);
  
  if (now >= targetDate) return 0;
  
  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};
