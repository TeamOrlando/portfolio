const PagesLayout = ({ headerText, buttonText, children }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">{headerText}</h1>
      <button className="px-6 py-2">buttonText</button>

      <div className="h-40 ">{children}</div>
    </div>
  );
};

export default PagesLayout;
