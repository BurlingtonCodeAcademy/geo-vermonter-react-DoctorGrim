// // button.component.js
// import React from 'react';
// import styles from './button.css';
// export const Button = ({ text, onClick, type, disabled }) => (
//     <button
//       type={type}
//       disabled={disabled}
//       onClick={onClick}
//       className={styles.button}
//     >
//       {text}
//     </button>
//   );



  
// function MoveButton(){
//     const { lat, lng } = this.state.mapPosition;
//     this.setState({
//       mapPosition: {
//         lat: lat + 0.0001,
//         lng: lng + 0.0001, 
//       }
//     });
//   }
//   moveMap()
//   componentDidUpdate({ mapPosition }) {
//     // check if position has changed
//     if (this.props.mapPosition !== mapPosition) {
//       this.map.panTo(this.props.mapPosition);
//     }
//   }
//   render(){
//     return(
// <button onClick={this.moveMap}>
//           Move map
//         </button>
//     );
//   }
// }

