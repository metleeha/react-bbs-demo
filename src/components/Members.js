import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  {
    "userId": "admin",
    "userNm": "어드민",
    "userZip": "100775",
    "userAdres": "서울 중구 무교동 한국정보화진흥원",
    "userEmail": "egovframesupport@gmail.com"
  },
  {
    "userId": "TEST1",
    "userNm": "테스트1",
    "userZip": "100775",
    "userAdres": "서울 중구 무교동 한국정보화진흥원",
    "userEmail": "egovframesupport@gmail.com"
  },
  {
    "userId": "USER",
    "userNm": "일반회원",
    "userZip": "100775",
    "userAdres": "서울 중구 무교동 한국정보화진흥원",
    "userEmail": "egovframesupport@gmail.com"
  },
  {
    "userId": "ENTERPRISE",
    "userNm": "NIA",
    "userZip": "100775",
    "userAdres": "서울특별시 중구 청계천로 14 - 0 한국정보사회진흥원",
    "userEmail": "egovframesupport@gmail.com"
  },
  {
    "userId": "webmaster",
    "userNm": "웹마스터",
    "userZip": "100775",
    "userAdres": "서울특별시 중구 청계천로 14 - 0 한국정보사회진흥원",
    "userEmail": "egovframesupport@gmail.com"
  }
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Members() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>User Management</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
              <TableCell>Num</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell> 
              <TableCell>Email</TableCell>
              <TableCell>Adress</TableCell>
              <TableCell>Zip</TableCell>
              <TableCell>regDate</TableCell>
              <TableCell>regStatus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.userId}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{row.userId}</TableCell>
              <TableCell>{row.userNm}</TableCell>
              <TableCell>{row.userEmail}</TableCell>
              <TableCell>{row.userAdres}</TableCell> 
              <TableCell>{row.userZip}</TableCell>  
              <TableCell>2020-07-24</TableCell>
              <TableCell>회원 가입 승인</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more users
        </Link>
      </div>
    </React.Fragment>
  );
}