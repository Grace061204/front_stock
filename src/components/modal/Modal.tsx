import React, { useRef, useState } from 'react';
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from '@ionic/react';
import InsertionForm from '../insert/InsertionForm';

const ModalExample: React.FC<{ dismiss: (data?: string | null, role?: string) => void }> = ({ dismiss }) => {
  const [sizes, setSizes] = useState<string[]>([]);
  
  const handleInsert = (size: string) => {
    setSizes((prevSizes) => [...prevSizes, size]);
    dismiss(size, 'confirm'); 
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => dismiss(null, 'cancel')}>
              Annuler
            </IonButton>
          </IonButtons>
          <IonTitle>Nouvelle Taille</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <InsertionForm onInsert={handleInsert} />
      </IonContent>
    </IonPage>
  );
};

export default ModalExample;
