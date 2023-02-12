const SideBar = () => (
  <aside className="col-12 col-md-3 min-vh-100 position-sticky" style={{ border: `1px solid red` }}>
    <div className="position-sticky" style={{ top: `0%` }}>
      <div style={{ paddingTop: `60px`, margin: `-13px`, border: `1px solid black` }} />
      <div className="px-4 py-5">
        <div
          className="mx-4"
          style={{ marginTop: `80px`, paddingTop: `350px`, border: `1px solid black` }}
        />
        <h2 className="mt-4">Hey! I'am Muhammad</h2>
        <h4>
          a Frontend Developer <br /> based in Lagos.
        </h4>
      </div>
    </div>
  </aside>
);

export default SideBar;
