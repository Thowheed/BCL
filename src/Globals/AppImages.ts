// const appImages: any = {
//     GRASS_IMAGE: require('../../public/Images/Grass.svg'),
//     TOTAL_ITEM_IMAGE: require('../../public/Images/TotalItem.svg'),
//     DELIVERY_ICON: require('../../public/Images/DeliveryIcon.svg'),
//     EDIT_ICON: require('../../public/Images/EditIcon.svg'),
//     LOCATION_ICON: require('../../public/Images/LocationIcon.svg'),
// }

// export default appImages;

//new code 

import GrassImage from '../../public/Images/Grass.svg';
import TotalItemImage from '../../public/Images/TotalItem.svg';
import DeliveryIcon from '../../public/Images/DeliveryIcon.svg';
import EditIcon from '../../public/Images/EditIcon.svg';
import LocationIcon from '../../public/Images/LocationIcon.svg';

import type { StaticImageData } from 'next/image';

const appImages: Record<string, StaticImageData> = {
  GRASS_IMAGE: GrassImage,
  TOTAL_ITEM_IMAGE: TotalItemImage,
  DELIVERY_ICON: DeliveryIcon,
  EDIT_ICON: EditIcon,
  LOCATION_ICON: LocationIcon,
};

export default appImages;
