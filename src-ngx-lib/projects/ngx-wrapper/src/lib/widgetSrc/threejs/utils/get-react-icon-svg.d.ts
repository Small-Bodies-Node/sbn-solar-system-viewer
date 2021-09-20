declare const iconsDict: {
    FiPhone: import("react-icons/lib").IconType;
    AiOutlineSetting: import("react-icons/lib").IconType;
    IoIosSettings: import("react-icons/lib").IconType;
};
interface IOptions {
    size?: number;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
}
/**
 * This is a wrapper around react-icons. react-icons is a great resource; it makes
 * it super easy to add icons from a massive array of options. Unfortunatley, we are
 * not using react here, so I've made this function to crudely extract the SVG from
 * the react-svg generator, and enabled this function to inject parameters into the
 * returned string representation.
 *
 * NOTE! This wrapper only extracts the first d property for the path element; if you try
 * to use an icon with more than one path, then you won't get the comlete icon; in short
 * only use simple-looking icons from react-icons
 *
 */
export declare const getReactIconSvg: (icon: keyof typeof iconsDict, options?: IOptions) => string;
export {};
