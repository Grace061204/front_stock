import React, { useState, useEffect } from 'react';
import InsertionForm from '../../components/insert/InsertionForm';
import SizeList from '../../components/list/SizeList';
import { IonButton, useIonModal } from '@ionic/react';
import { getTaille } from '../../components/service/categorie.service'; 
import Example from '../../components/modal/Modal';
import Spinner from '../../components/spinner/Spinner'; 
import axios from 'axios';

const SizePage: React.FC = () => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [present, dismiss] = useIonModal(Example, {
    dismiss: (data: string, role: string) => {
      if (role === 'confirm') {
        insertSize(data);
      }
      dismiss();
    },
  });

  const staticToken = 'xrI17eAc5fEmQQYpNP4WmwMEqonoMHH3sdxrCoztVaiEHDfOQbdiTnHq5b0l';

  useEffect(() => {
    setLoading(true);
    getTaille()
      .then((response) => {
        setSizes(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des tailles :", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []); 

  const insertSize = (nom: string) => {
    setLoading(true); 
    axios
      .post(
        'http://127.0.0.1:8000/api/insert_taille',
        { nom },
        {
          headers: {
            Authorization: `Bearer ${staticToken}`,
          },
        }
      )
      .then((response) => {
        setSizes((prevSizes) => [...prevSizes, nom]);
      })
      .catch((error) => {
        console.error("Erreur lors de l'insertion de la taille :", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddSize = () => {
    present({
      onWillDismiss: (ev) => {
        if (ev.detail.role === 'confirm') {
          insertSize(ev.detail.data);
        }
      },
    });
  };

  return (
    <div>
      <IonButton expand="block" onClick={handleAddSize}>
        Ajouter Taille
      </IonButton>
      <h2>Liste Des Tailles</h2>
      {loading ? (
        <Spinner /> 
      ) : (
        <SizeList /> 
      )}
    </div>
  );
};

export default SizePage;
