import React from 'react';
import { IonItem, IonLabel, IonSpinner } from '@ionic/react';

function Spinner() {
  return (
<IonItem>
        <IonLabel>Chargement Taille</IonLabel>
        <IonSpinner name="bubbles"></IonSpinner>
      </IonItem>
  );
}
export default Spinner;