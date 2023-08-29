interface Base {
  id: number;
  name: string;
}

interface Menu extends Base {
  price: number;
  description?: string;
}

interface MenuCategory extends Base {
  companyId: number;
}

interface AppData {
  menus: Menu[];
  menuCategories: MenuCategory[];
}

const menus: Menu[] = [
  { id: 1, name: "Mont Hin Khar", price: 2000, description: "Hot and spicy" },
  { id: 2, name: "shan kout swell", price: 3000, description: "Hot and spicy" },
  { id: 3, name: "Laphet tote", price: 1000, description: "Hot and spicy" },
];

const menuCategories: MenuCategory[] = [
  { id: 1, name: " Most popular", companyId: 1 },
  { id: 2, name: " Hot Dish", companyId: 1 },
  { id: 3, name: " Cold Dish", companyId: 1 },
];

export const appData: AppData = {
  menus, // menus : menus
  menuCategories,
};
