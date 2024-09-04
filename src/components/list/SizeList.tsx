import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getTaille } from "../service/categorie.service";
import { Taille } from '../type/Categorie.type';




// const getTaille = () => {
//   const apiUrl = 'http://127.0.0.1:8000/api';
//   return axios.get(`${apiUrl}/taille`);
// };

const SizeList: React.FC = () => {
  const [sizes, setSizes] = useState<Taille[]>([]);

  useEffect(() => {
    getTaille()
      .then((res) => {
        setSizes(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <TableContainer style={{ maxHeight: '50vh', overflow: 'auto' }}>
      <Table stickyHeader aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell>Référence</TableCell>
            <TableCell>Taille</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sizes.map((taille) => (
            <TableRow key={taille.id}>
              <TableCell>{taille.id}</TableCell>
              <TableCell>{taille.nom}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SizeList;
