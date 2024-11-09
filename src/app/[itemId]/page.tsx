// page.tsx (server file)

import ItemDetails from "@/components/ItemDetails";
import { objData } from "@/data";

// interface ParamsType {
//   itemId: string;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: { params: any }) {
  try {
    const resolvedParams = await params;
    const itemId = resolvedParams.itemId;

    const itemDetails = objData.find((data) => data.id === Number(itemId));

    if (!itemDetails) {
      return {
        title: 'Item Not Found',
        description: 'The requested item does not exist.',
      };
    }

    return {
      title: itemDetails.name,
      description: itemDetails.details,
    };
  } catch (error) {
    console.error('Error fetching item details:', error);
    return {
      title: 'Error Loading Item',
      description: 'An error occurred while fetching item details.',
    };
  }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ItemPage({ params }: { params: any }) {
  return <ItemDetails itemId={params.itemId} />;
}

