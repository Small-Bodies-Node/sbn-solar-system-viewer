export declare const imageBaseUrl = "https://sbn-solar-system-viewer.s3.amazonaws.com/";
export declare const earthRadius = 6378000;
export declare const au = 149597870700;
export declare const orbitalParams: {
    SUN: {
        radiusMeters: number;
        periodDays: undefined;
    };
    MERCURY: {
        radiusMeters: number;
        periodDays: number;
    };
    VENUS: {
        radiusMeters: number;
        periodDays: number;
    };
    EARTH: {
        radiusMeters: number;
        periodDays: number;
    };
    MARS: {
        radiusMeters: number;
        periodDays: number;
    };
    JUPITER: {
        radiusMeters: number;
        periodDays: number;
    };
    SATURN: {
        radiusMeters: number;
        periodDays: number;
    };
    URANUS: {
        radiusMeters: number;
        periodDays: number;
    };
    NEPTUNE: {
        radiusMeters: number;
        periodDays: number;
    };
    PLUTO: {
        radiusMeters: number;
        periodDays: number;
    };
    MOON: {
        radiusMeters: number;
        periodDays: number;
    };
};
export declare const planets: readonly ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE", "PLUTO"];
export declare const isKeplerUtils = true;
export declare const secondsPerCentury = 3155692597.474;
export declare const minutesPerCentury: number;
export declare const hoursPerCentury: number;
export declare const daysPerCentury: number;
