import { WrapperFiler, FilterInput, FilterP } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtration } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <WrapperFiler>
      <FilterP>Find contacts by name</FilterP>
      <FilterInput
        value={filter}
        type="text"
        onChange={e => dispatch(filtration(e.target.value))}
      />
    </WrapperFiler>
  );
};