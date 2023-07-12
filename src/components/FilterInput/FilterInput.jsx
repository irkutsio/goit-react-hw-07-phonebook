import { Filter } from './FilterInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const FilterInput = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value.toLocaleLowerCase()));
  };

  return (
    <Filter>
      <label>Find Contact by name</label>
      <input type="text" value={filter} onChange={handleChange} />
    </Filter>
  );
};
