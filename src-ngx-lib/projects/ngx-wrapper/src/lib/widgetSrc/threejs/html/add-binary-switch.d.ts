/**
 * Function to create a binary switch with text for the two different states
 * and a callback used to set local-storage options
 * This switch is intended for the settings panel; you create it with the
 * text for the title of the switch (goes on left) and for the two different states.
 * The callback will be used to change the state of options
 */
export declare const addBinarySwitch: (title: string, onText: string, offText: string, stateUpdateCallBack: () => any, id?: string) => HTMLDivElement;
