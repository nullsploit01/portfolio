const NavBar = () => {
  return (
    <div className="flex justify-center place-content-center mt-5">
      <div>
        <p className="mx-4 p-1 cursor-pointer hover:bg-slate-500 rounded-sm">Home</p>
      </div>
      <div>
        <p className="mx-4 p-1 cursor-pointer hover:bg-slate-500 rounded-sm">Blogs</p>
      </div>
    </div>
  );
};

export default NavBar;
