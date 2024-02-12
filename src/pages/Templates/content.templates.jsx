// eslint-disable-next-line react/prop-types
export function ContentWrapper({ children }) {
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">{children}</div>
      </section>
    </div>
  );
}
