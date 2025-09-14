import React from "react";
import { Icon } from "@iconify/react";

/**
 * A multi-layered, floating card component with customizable text, icons, and themes.
 *
 * @param {object} props - The component props.
 * @param {string} [props.text='Video Editing'] - The text to be displayed on the card.
 * @param {string} [props.icon='ph:dot-fill'] - The name of the Iconify icon to display.
 * @param {string} [props.theme='green'] - The color theme of the card.
 * Available themes: 'green', 'yellow', 'blue', 'purple', 'lime', 'orange'.
 * @param {boolean} [props.active=true] - If true, the card displays a floating shadow and offset. If false, the card is flat.
 * @param {'left' | 'right'} [props.variant='right'] - The alignment of the icon and shadow offset.
 * 'right' places the icon on the right and offsets to the left.
 * 'left' places the icon on the left and offsets to the right.
 */
type FloatingCardProps = {
  text?: string;
  icon?: string;
  theme?: "green" | "yellow" | "blue" | "purple" | "lime" | "orange";
  active?: boolean;
  variant?: "left" | "right";
};

const themes: Record<
  string,
  {
    iconColor: string;
    backgroundColor: string;
    shadowColor: string;
    iconBackgroundColor: string;
  }
> = {
  green: {
    iconColor: "#37D98E",
    backgroundColor:
      "linear-gradient(90deg, rgba(234, 251, 243, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), #EAFBF3",
    shadowColor: "rgba(62, 218, 146, 0.50)",
    iconBackgroundColor: "#BFF3DB",
  },
  yellow: {
    iconColor: "#FFC700",
    backgroundColor:
      "linear-gradient(90deg, rgba(255, 246, 217, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), #FFF6D9",
    shadowColor: "rgba(255, 199, 0, 0.50)",
    iconBackgroundColor: "#FFE99E",
  },
  blue: {
    iconColor: "#1667D0",
    backgroundColor:
      "linear-gradient(90deg, rgba(232, 241, 253, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), #E8F1FD",
    shadowColor: "rgba(22, 103, 208, 0.50)",
    iconBackgroundColor: "#BAD5F8",
  },
  purple: {
    iconColor: "#BA71DA",
    backgroundColor:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(245, 235, 250, 0.50) 100%), #F5EBFA",
    shadowColor: "rgba(167, 73, 208, 0.50)",
    iconBackgroundColor: "#E2C2EF",
  },
  lime: {
    iconColor: "#97D412",
    backgroundColor:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(246, 253, 231, 0.50) 100%), #F6FDE7",
    shadowColor: "rgba(151, 212, 18, 0.50)",
    iconBackgroundColor: "#E5F9B8",
  },
  orange: {
    iconColor: "#D24513",
    backgroundColor:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(253, 237, 232, 0.50) 100%), #FDEDE8",
    shadowColor: "rgba(210, 69, 19, 0.50)",
    iconBackgroundColor: "#F9C9B9",
  },
};

const FloatingCard: React.FC<FloatingCardProps> = ({
  text = "Video Editing",
  icon = "ph:dot-fill",
  theme = "green",
  active = true,
  variant = "right",
}) => {
  const currentTheme = themes[theme] || themes.green;

  return (
    <div className="relative inline-flex flex-col items-center justify-center gap-2">
      {/* Shadow Layer - Only rendered if active is true */}
      {active && (
        <div
          className="py-1.5 px-3 rounded-[30px] overflow-hidden flex items-center justify-center gap-2"
          style={{
            background: currentTheme.shadowColor,
            filter: "blur(2.50px)",
            whiteSpace: "nowrap",
          }}
        >
          {/* Invisible text and icon container to maintain layout size */}
          <div className="text-center text-transparent text-base font-medium">
            {text}
          </div>
          <div className="p-1.5 rounded-full bg-transparent">
            <div className="w-6 h-6" />
          </div>
        </div>
      )}

      {/* Main Card Layer */}
      <div
        className={`py-1.5 px-3 rounded-[30px] overflow-hidden flex items-center justify-center gap-2
          ${
            active
              ? variant === "left"
                ? "absolute -top-2 right-1"
                : "absolute -top-2 left-1"
              : "relative"
          }
          ${variant === "left" ? "flex-row-reverse" : ""}`}
        style={{
          background: currentTheme.backgroundColor,
          whiteSpace: "nowrap",
        }}
      >
        <div className="text-center text-black text-base font-medium">
          {text}
        </div>
        <div
          className="p-1.5 rounded-full flex items-center justify-center"
          style={{ background: currentTheme.iconBackgroundColor }}
        >
          <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
            <Icon
              icon={icon}
              color={currentTheme.iconColor}
              fontSize="1.5rem"
              className="text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
