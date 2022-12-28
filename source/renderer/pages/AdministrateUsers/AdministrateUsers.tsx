import useCSVToJson from "../../hooks/useCSVToJson/useCSVToJson";

const AdministrateUsers = () => {
  const { value } = useCSVToJson({
    content: "",
  });
  return (
    <>
      <input type="file" multiple accept=".csv" />
    </>
  );
};

export default AdministrateUsers;
