// import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import { StyledUserList } from './UserList.styled';
// import { selectFilter } from 'redux/usersSelectors';

const UserList = ({usersToShow}) => {
  // const filterValue = useSelector(selectFilter);
  let usersFiltered = usersToShow;
  
  return (   
    <StyledUserList>
      {usersToShow && (
        <>
          {usersFiltered?.map(user => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </>
      )}
    </StyledUserList>
  );
};

export default UserList;
