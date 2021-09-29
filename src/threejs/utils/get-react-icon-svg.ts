// // import { FiPhone } from 'react-icons/fi';
// import { AiOutlineSetting } from 'react-icons/ai';
// import { IoIosSettings } from 'react-icons/io';

// const iconsDict = {
//   // FiPhone,
//   AiOutlineSetting,
//   IoIosSettings,
// };

// interface IOptions {
//   size?: number;
//   fillColor?: string;
//   strokeColor?: string;
//   strokeWidth?: number;
// }

// /**
//  * This is a wrapper around react-icons. react-icons is a great resource; it makes
//  * it super easy to add icons from a massive array of options. Unfortunatley, we are
//  * not using react here, so I've made this function to crudely extract the SVG from
//  * the react-svg generator, and enabled this function to inject parameters into the
//  * returned string representation.
//  *
//  * NOTE! This wrapper only extracts the first d property for the path element; if you try
//  * to use an icon with more than one path, then you won't get the comlete icon; in short
//  * only use simple-looking icons from react-icons
//  *
//  */
// export const getReactIconSvg = (
//   icon: keyof typeof iconsDict,
//   options: IOptions = {}
// ): string => {
//   // --->>

//   // Extract essential data from react-icons instance
//   const reactIcon = iconsDict[icon]({});
//   const d = reactIcon.props.children[0].props.d;
//   const viewBox = reactIcon.props.attr.viewBox;

//   // Options
//   const SIZE = options.size || 20;
//   const FILL_COLOR = options.fillColor || 'none';
//   const STROKE_COLOR = options.strokeColor || 'white'; // 'none' for transparent
//   const STROKE_WIDTH = options.strokeWidth || 2;

//   const svg = `
//     <svg
//       stroke="${STROKE_COLOR}"
//       fill="${FILL_COLOR}"
//       stroke-width="${STROKE_WIDTH}"
//       viewBox="${viewBox}"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       height="${SIZE}"
//       width="${SIZE}"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="${d}"
//       </path>
//     </svg>`;

//   // console.log('svg', svg);
//   return svg;
// };
