import React from "react";

interface BotaoProps {
  cor: "blue" | "gray" | "green";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  return (
    <button
      className={`
            bg-gradient-to-r ${cor()}
            hover:opacity-80
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  );

  function cor() {
    switch (props.cor) {
      case "blue":
        return "from-blue-400 to-blue-700";
      case "green":
        return "from-green-400 to-green-700";
      default:
        return "from-gray-400 to-gray-700";
    }
  }
}
