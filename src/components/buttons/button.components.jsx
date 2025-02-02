// import React from "react";
import './button.style.css'

// const OptionButton = ({ option, onOptionClick, selectedOption, index}) => {
//   return (
//     <div key={index} className="option"
//               onClick={() => onOptionClick(option.is_correct, index)}
//               style={{
//                 backgroundColor:
//                 selectedOption && selectedOption.index === index
//                 ? selectedOption.isCorrect
//                 ? 'green'
//                 : 'red'
//                 : 'initial',
//             }}
//             >
//         {option.description}
//     </div>
//   );
// };

// export default OptionButton;


import React from "react";
import './button.style.css';

const OptionButton = ({ option, onOptionClick, selectedOption, index, isOptionClicked }) => {
  return (
    <div
      key={index}
      className="option"
      onClick={() => {
        if (!isOptionClicked) {
          onOptionClick(option.is_correct, index);
        }
      }}
      style={{
        backgroundColor:
          selectedOption && selectedOption.index === index
            ? selectedOption.isCorrect
              ? 'green'
              : 'red'
            : 'initial',
        pointerEvents: isOptionClicked ? 'none' : 'auto', // Disable further clicks if an option is clicked
      }}
    >
      {option.description}
    </div>
  );
};

export default OptionButton;