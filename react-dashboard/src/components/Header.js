import React from 'react';
import { Box, Flex, Input, IconButton, Avatar } from '@chakra-ui/react';
import { FiBell, FiSettings } from 'react-icons/fi';

const Header = () => {
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

export default Header;
