/* eslint-disable react/prop-types */
export function CardComponent({ title, Tools, content, size }) {
  return (
    <div className="card">
      <div className="card-header border-0"></div>
      <h3 className="card-title">{title}</h3>
      <div className="card-tools">{Tools}</div>
    </div>
  );
}
