import "./search-box.styles.css";

const SearchBox = ({className, placeHolder, onChangeHandler}) => (
    <div>
        <input
            className={`search-box-demo ${className}`}
            placeholder={placeHolder}
            type={"search"}
            onChange={onChangeHandler}
        />
    </div>
);

export default SearchBox;
