/**
 * Standard JavaScript Style with Prettier
 */

module.exports = {
  extends: [
    "@tylergaffaney/eslint-config",
    // Extends preset about prettier
    require.resolve("./prettier"),
  ],
};
