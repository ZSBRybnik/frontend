import useCSVToJson from "../../hooks/useCSVToJson/useCSVToJson";

const AdministrateUsers = () => {
  useCSVToJson({
    content: "",
  });
  return (
    <>
      <input type="file" multiple accept=".csv" />
    </>
  );
};

export default AdministrateUsers;
