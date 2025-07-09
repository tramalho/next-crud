interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: string | number;
  somenteLeitura?: boolean;
  valorMudou?: (valor: string | number) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`
                border border-purple-500 rounded-lg
                focus: outline-blue-400 bg-gray-100
                px-4 py-2
                ${props.somenteLeitura ? "" : "focus:bg-white"}
                `}
        onChange={
          props.somenteLeitura
            ? undefined
            : (e) => props.valorMudou?.(e.target.value)
        }
      />
    </div>
  );
}
