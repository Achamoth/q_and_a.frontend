export const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Searched ${e.target.value}`);
  };

  return (
    <div>
      <a href="./">Q & A</a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <span>Sign In</span>
      </a>
    </div>
  );
};
