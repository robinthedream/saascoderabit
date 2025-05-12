import React, { useState } from 'react';
import { Box, Flex, Input, IconButton, Avatar } from '@chakra-ui/react';
import { FiBell, FiSettings } from 'react-icons/fi';

// Bug: Component name doesn't match file name
const TopBar = () => {
  // Bug: State not being used
  const [searchTerm, setSearchTerm] = useState('')

  // Bug: Function declared but never used
  function handleNotification() {
    console.log('Notification clicked')
  }

  // Bug: Direct DOM manipulation
  document.title = 'Dashboard'
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="4"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Input
        placeholder="Search..."
        width="300px"
        borderRadius="full"
      />
      <Flex align="center" gap="4">
        <IconButton
          icon={<FiBell />}
          variant="ghost"
          aria-label="Notifications"
        />
        <IconButton
          icon={<FiSettings />}
          variant="ghost"
          aria-label="Settings"
        />
        <Avatar size="sm" name="User Name" src="https://bit.ly/broken-link" />
      </Flex>
    </Flex>
  );
};

// Bug: Exporting with different name than component
export default TopBar;
