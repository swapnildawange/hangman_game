export const HammerIcon = () => {
  return (
    <svg
      width="114"
      height="199"
      viewBox="0 0 114 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_348_36)">
        <path
          d="M57 104H42V182.5C42 186.642 45.3579 190 49.5 190V190C53.6421 190 57 186.642 57 182.5V104Z"
          fill="#FFBE82"
        />
        <path
          d="M57 103.5C57.2761 103.5 57.5 103.724 57.5 104V182.5C57.5 186.918 53.9183 190.5 49.5 190.5C45.0817 190.5 41.5 186.918 41.5 182.5V104C41.5 103.724 41.7239 103.5 42 103.5H57Z"
          stroke="black"
          stroke-linejoin="round"
        />
      </g>
      <rect
        x="35.5"
        y="0.5"
        width="27"
        height="108"
        rx="4.5"
        fill="#7AA1F5"
        stroke="black"
      />
      <g filter="url(#filter1_d_348_36)">
        <circle cx="50" cy="54" r="50" fill="#FFE074" />
        <circle cx="50" cy="54" r="49.5" stroke="black" />
      </g>
      <g filter="url(#filter2_d_348_36)">
        <circle cx="49.5" cy="53.5" r="41.5" fill="#F33636" />
        <circle cx="49.5" cy="53.5" r="41" stroke="black" />
      </g>
      <path
        d="M42 142.5L57 133V142.5L42 151V142.5Z"
        fill="#FB873F"
        stroke="black"
      />
      <path
        d="M42 120.5L57 111V120.5L42 129V120.5Z"
        fill="#FB873F"
        stroke="black"
      />
      <path
        d="M42 165.5L57 156V165.5L42 174V165.5Z"
        fill="#FB873F"
        stroke="black"
      />


      <defs>
        <filter
          id="filter0_d_348_36"
          x="41"
          y="103"
          width="31"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_348_36"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_348_36"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_348_36"
          x="0"
          y="4"
          width="114"
          height="108"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_348_36"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_348_36"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_348_36"
          x="8"
          y="12"
          width="97"
          height="91"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_348_36"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_348_36"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export const HammerHeadIcon = ({letter,handleClick}) => {
  return (
    <button onClick={()=>handleClick(letter)} className="cursor-pointer">
      <svg
        width="114"
        height="112"
        viewBox="0 0 114 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="35.5"
          y="0.5"
          width="27"
          height="108"
          rx="4.5"
          fill="#7AA1F5"
          stroke="black"
        />
        <g filter="url(#filter0_d_348_36)">
          <circle cx="50" cy="54" r="50" fill="#FFE074" />
          <circle cx="50" cy="54" r="49.5" stroke="black" />
        </g>
        <g filter="url(#filter1_d_348_36)">
          <circle cx="49.5" cy="53.5" r="41.5" fill="#F33636" />
          <circle cx="49.5" cy="53.5" r="41" stroke="black" />
        </g>
        <defs>
          <filter
            id="filter0_d_348_36"
            x="0"
            y="4"
            width="114"
            height="108"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="10" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_348_36"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_348_36"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_348_36"
            x="8"
            y="12"
            width="97"
            height="91"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="10" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_348_36"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_348_36"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};