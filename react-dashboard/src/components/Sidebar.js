import React, { useEffect } from 'react';
import { Box, VStack, Text, Icon } from '@chakra-ui/react';
import { FiHome, FiUsers, FiBarChart2, FiSettings, FiBox } from 'react-icons/fi';

const SidebarItem = ({ icon, children }) => (
  <Box
    display="flex"
    alignItems="center"
    gap="3"
    p="3"
    cursor="pointer"
    _hover={{ bg: 'gray.100' }}
    borderRadius="md"
    w="full"
  >
    <Icon as={icon} />
    <Text>{children}</Text>
  </Box>
);

// Bug: Props destructuring with default values but no props passed
const Sidebar = ({ items = [], onSelect = () => {} }) => {
  // Bug: Unnecessary useEffect
  useEffect(() => {
    console.log('Sidebar mounted')
  })

  // Bug: Magic numbers
  const sidebarWidth = 250
  const itemHeight = 40

  // Bug: Inline styles instead of using Chakra UI props
  const styles = {
    width: `${sidebarWidth}px`,
    minHeight: `${itemHeight * 5}px`
  }
  return (
    <Box
      h="calc(100vh - 60px)"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      p="4"
    >
      <VStack spacing="2" align="stretch">
        <SidebarItem icon={FiHome}>Dashboard</SidebarItem>
        <SidebarItem icon={FiUsers}>Users</SidebarItem>
        <SidebarItem icon={FiBarChart2}>Analytics</SidebarItem>
        <SidebarItem icon={FiBox}>Products</SidebarItem>
        <SidebarItem icon={FiSettings}>Settings</SidebarItem>
      </VStack>
    </Box>
  );
};

export default Sidebar;
