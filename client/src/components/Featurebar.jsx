import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Featurebar = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [searchInput, setSearchInput] = useState("");

  const handleOnChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleGetFavourites = () => {
    navigate(`/blog/favourites`);
  };

  const handleSorting = () => {
    navigate(`/blog/sort`, {
      state: { sort: "title" },
    });
  };

  const handleCategoryWiseSearch = (e) => {
    navigate(`/blog` + "?" + `category=${searchInput}`, {
      state: { searchInput: `${searchInput}` },
    });
  };
  return (
    <>
      <div className="container mt-3 d-flex">
        {currentUser && (
          <button
            className="btn btn-info m-2"
            type="submit"
            onClick={handleGetFavourites}
          >
            Favorite Blogs
          </button>
        )}
        <button
          className="btn btn-info m-2"
          type="submit"
          onClick={handleSorting}
        >
          Sort by title
        </button>
        <input
          className="form-control m-2 col-md-4"
          type="search"
          placeholder="Search Blog by Category"
          aria-label="Search"
          name="category"
          onChange={handleOnChangeSearchInput}
        />
        <button
          className="btn btn-info m-2"
          type="submit"
          onClick={handleCategoryWiseSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};
