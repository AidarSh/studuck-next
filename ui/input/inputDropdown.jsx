export default function InputDropdown({ data, select }) {
  return (
    <select
      name="subjects"
      id="subjects"
      className="text-sm mr-3 w-52 outline-none"
    >
      {select != "none" && (
        <option
          value="none"
          selected
          disabled
          hidden
          className="text-sm text-gray"
        >
          {select}
        </option>
      )}
      {data.map((item, id) => (
        <option key={id} value="math" className="text-sm">
          {item.name}
        </option>
      ))}
    </select>
  );
}
