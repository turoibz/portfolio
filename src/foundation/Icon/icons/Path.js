import React from "react";
import { StyledIcon } from "../Icon.styled";

export function PathIcon({...props}){
  return (
    <StyledIcon viewBox="0 0 24 24" {...props}>
      <path d="M17.7115 18.425L16.4462 19.6712C16.3526 19.7648 16.2388 19.8084 16.1048 19.802C15.9708 19.7956 15.8551 19.7436 15.7577 19.6462C15.6641 19.5526 15.6173 19.4411 15.6173 19.3116C15.6173 19.1821 15.6641 19.0705 15.7577 18.977L16.9981 17.7116L15.7577 16.4712C15.6641 16.3776 15.6173 16.2638 15.6173 16.1298C15.6173 15.9959 15.6641 15.8802 15.7577 15.7827C15.8551 15.6725 15.974 15.6205 16.1144 15.627C16.2548 15.6334 16.3737 15.6853 16.4712 15.7827L17.7115 17.0231L18.9327 15.777C19.0263 15.6795 19.1433 15.6308 19.2837 15.6308C19.424 15.6308 19.543 15.6795 19.6404 15.777C19.7507 15.8872 19.8058 16.0061 19.8058 16.1337C19.8058 16.2612 19.7507 16.3802 19.6404 16.4904L18.4 17.7116L19.6462 18.9577C19.7436 19.0552 19.7946 19.1731 19.799 19.3116C19.8035 19.45 19.7507 19.568 19.6404 19.6654C19.543 19.759 19.425 19.8036 19.2865 19.7991C19.1481 19.7946 19.0301 19.7436 18.9327 19.6462L17.7115 18.425ZM6.5 19C6.91153 19 7.26442 18.8529 7.55865 18.5587C7.85288 18.2644 8 17.9116 8 17.5C8 17.0885 7.85288 16.7356 7.55865 16.4414C7.26442 16.1471 6.91153 16 6.5 16C6.08847 16 5.73558 16.1471 5.44135 16.4414C5.14712 16.7356 5 17.0885 5 17.5C5 17.9116 5.14712 18.2644 5.44135 18.5587C5.73558 18.8529 6.08847 19 6.5 19ZM6.5 20C5.80768 20 5.21794 19.7564 4.73078 19.2693C4.24359 18.7821 4 18.1923 4 17.5C4 16.8077 4.24359 16.218 4.73078 15.7308C5.21794 15.2436 5.80768 15 6.5 15C7.09102 15 7.61506 15.1837 8.07213 15.551C8.52918 15.9183 8.81668 16.3936 8.93463 16.977C9.71283 16.909 10.367 16.5891 10.8971 16.0173C11.4272 15.4455 11.6923 14.7731 11.6923 14V10.2885C11.6923 9.04618 12.1317 7.9856 13.0106 7.10675C13.8894 6.2279 14.95 5.78848 16.1923 5.78848H18.0731L16.3519 4.06733C16.2545 3.96989 16.2035 3.85419 16.199 3.72023C16.1945 3.58624 16.2474 3.46413 16.3577 3.35388C16.4679 3.24361 16.5869 3.18848 16.7144 3.18848C16.842 3.18848 16.9609 3.24361 17.0712 3.35388L19.4346 5.7231C19.5962 5.88463 19.6769 6.07309 19.6769 6.28848C19.6769 6.50386 19.5962 6.69233 19.4346 6.85388L17.0462 9.24233C16.9526 9.33593 16.842 9.38368 16.7144 9.3856C16.5869 9.38753 16.4679 9.33978 16.3577 9.24233C16.2474 9.14874 16.1955 9.034 16.2019 8.8981C16.2083 8.7622 16.2583 8.63913 16.3519 8.52888L18.0539 6.7885H16.1923C15.218 6.7885 14.391 7.12824 13.7115 7.80773C13.032 8.48721 12.6923 9.31413 12.6923 10.2885V14C12.6923 15.05 12.3295 15.9542 11.6038 16.7125C10.8782 17.4709 9.9923 17.8943 8.94615 17.9827C8.8359 18.5737 8.55032 19.0577 8.08942 19.4347C7.62852 19.8116 7.09872 20 6.5 20ZM6.28845 7.00195L5.02308 8.2481C4.92949 8.3417 4.81571 8.38529 4.68172 8.37888C4.54776 8.37246 4.43205 8.32053 4.3346 8.2231C4.24102 8.12952 4.19422 8.01798 4.19422 7.88848C4.19422 7.75899 4.24102 7.64746 4.3346 7.55388L5.575 6.28848L4.3346 5.0481C4.24102 4.95452 4.19422 4.84073 4.19422 4.70675C4.19422 4.57278 4.24102 4.45708 4.3346 4.35963C4.43205 4.24938 4.55097 4.19746 4.69135 4.20388C4.83173 4.21028 4.95064 4.26219 5.04808 4.35963L6.28845 5.60003L7.5096 4.35388C7.6032 4.25643 7.72019 4.2077 7.86058 4.2077C8.00096 4.2077 8.11987 4.25643 8.2173 4.35388C8.32757 4.46413 8.3827 4.58303 8.3827 4.7106C8.3827 4.83817 8.32757 4.95708 8.2173 5.06733L6.97692 6.28848L8.22308 7.53463C8.32051 7.63208 8.37148 7.75003 8.37598 7.88848C8.38046 8.02694 8.32757 8.14489 8.2173 8.24233C8.11987 8.33593 8.00192 8.38048 7.86345 8.376C7.725 8.3715 7.60705 8.32053 7.5096 8.2231L6.28845 7.00195Z"/>
    </StyledIcon>
  )
}
