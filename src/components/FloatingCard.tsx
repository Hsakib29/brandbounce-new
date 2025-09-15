import React from "react";
import { Icon } from "@iconify/react";

/**
 * A multi-layered, floating card component with customizable text, icons, and themes.
 *
 * @param {object} props - The component props.
 * @param {string} [props.text='Video Editing'] - The text to be displayed on the card.
 * @param {string} [props.theme='green'] - The color theme of the card.
 * Available themes: 'green', 'yellow', 'blue', 'purple', 'lime', 'orange'.
 * @param {string} [props.icon] - The icon name (e.g. 'mdi:video').
 * @param {boolean} [props.active=true] - If true, the card displays a floating shadow and offset. If false, the card is flat.
 * @param {'left' | 'right'} [props.variant='right'] - The alignment of the icon and shadow offset.
 * 'right' places the icon on the right and offsets to the left.
 * 'left' places the icon on the left and offsets to the right.
 */
interface FloatingCardProps {
  text?: string;
  theme?: string;
  active?: boolean;
  variant?: "left" | "right";
  icon?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  text = "Video Editing",
  theme = "green",
  active = true,
  variant = "right",
  icon,
}) => {
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
  const currentTheme = themes[theme] || themes.green;
  const isRightVariant = variant === "right";

  return (
    <div className="relative inline-flex flex-col items-center justify-center gap-2">
      <style>
        {`
          @keyframes bounce-up-left {
              0% { transform: translate(0, 0); }
              50% { transform: translate(-6px, -10px); }
              100% { transform: translate(-4px, -8px); }
          }
          @keyframes bounce-up-right {
              0% { transform: translate(0, 0); }
              50% { transform: translate(6px, -10px); }
              100% { transform: translate(4px, -8px); }
          }
          .card-bounce-right {
              animation: bounce-up-left 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
          }
          .card-bounce-left {
              animation: bounce-up-right 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
          }
        `}
      </style>

      {/* Shadow Layer - Only rendered if active is true */}
      {active && (
        <div
          className="py-1.5 px-3 rounded-[30px] overflow-hidden flex items-center justify-center gap-2"
          style={{
            background: currentTheme.shadowColor,
            filter: "blur(2.50px)",
            whiteSpace: "nowrap",
            ...(variant === "left" ? { marginLeft: "12px" } : {}),
            ...(variant === "right" ? { marginRight: "12px" } : {}),
          }}
        >
          {/* Invisible text and icon container to maintain layout size */}
          <div className="text-center text-transparent text-base font-medium">
            {text}
          </div>
          <div className="p-1.5 rounded-full bg-transparent flex items-center justify-center">
            <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
              {icon ? (
                <Icon
                  icon={icon}
                  color={currentTheme.iconColor}
                  width="1.5em"
                  height="1.5em"
                />
              ) : (
                <span
                  style={{
                    color: currentTheme.iconColor,
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  ●
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Card Layer */}
      <div
        className={`py-1.5 px-3 rounded-[30px] overflow-hidden flex items-center justify-center gap-2
          ${active ? "absolute" : "relative"}
          ${variant === "left" ? "flex-row-reverse" : ""}
          ${
            active
              ? isRightVariant
                ? "card-bounce-right"
                : "card-bounce-left"
              : ""
          }`}
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
            {/* Icon rendering: if icon prop is provided, use Iconify, else fallback to circle */}
            {icon ? (
              <Icon
                icon={icon}
                color={currentTheme.iconColor}
                width="1.5em"
                height="1.5em"
              />
            ) : (
              <span
                style={{
                  color: currentTheme.iconColor,
                  fontSize: "1.5rem",
                  lineHeight: "1.5rem",
                }}
              >
                ●
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
