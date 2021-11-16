/**
 * Permissible types of asteroid belt
 */

export const cometBeltTypes = ['A', 'C', 'P'] as const;

export type TCometBeltType = typeof cometBeltTypes[number];
