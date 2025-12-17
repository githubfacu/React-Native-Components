import { Ionicons } from "@expo/vector-icons";

interface MenuRoute{
  title: string
  icon: keyof typeof Ionicons.glyphMap
  name: string
  headerShown: boolean
}

export const menuRoutes: MenuRoute[] = [
  {
    title: 'Pull to refresh',
    icon: 'refresh-outline',
    name: 'pull-to-refresh/index',
    headerShown: true
  },
  {
    title: 'Section List',
    icon: 'list-outline',
    name: 'section-list/index',
    headerShown: true
  },
  {
    title: 'Modal',
    icon: 'copy-outline',
    name: 'modal',
    headerShown: true
  },
  {
    title: 'InfiniteScroll',
    icon: 'download-outline',
    name: 'infinite-scroll/index',
    headerShown: true
  },
  {
    title: 'Slides',
    icon: 'flower-outline',
    name: 'slides/index',
    headerShown: false
  },
  {
    title: 'Themes',
    icon: 'flask-outline',
    name: 'themes/index',
    headerShown: true
  },
];

export const uiMenuRoutes: MenuRoute[] = [
  {
    title: 'Switches',
    icon: 'toggle-outline',
    name: 'switches/index',
    headerShown: true
  },
  {
    title: 'Alerts',
    icon: 'alert-circle-outline',
    name: 'alerts/index',
    headerShown: true
  },
  {
    title: 'TextInputs',
    icon: 'document-text-outline',
    name: 'text-inputs/index',
    headerShown: true
  },
];

export const animationMenuRoutes: MenuRoute[] = [
  {
    title: 'Animation 101',
    icon: 'cube-outline',
    name: 'animation-101/index',
    headerShown: true
  },
  {
    title: 'Animation 102',
    icon: 'albums-outline',
    name: 'animation-102/index',
    headerShown: true
  },
];

export const allRoutes: MenuRoute[] = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
