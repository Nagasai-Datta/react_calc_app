export default function Btn({ val, style, gridSpan, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        gridColumn: gridSpan ? `span ${gridSpan}` : undefined,
        height: "60px",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      {val}
    </button>
  );
}