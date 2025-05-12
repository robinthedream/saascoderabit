import React from 'react';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';

const StatCard = ({ label, number, change }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{number}</StatNumber>
      <StatHelpText>
        <StatArrow type={change > 0 ? 'increase' : 'decrease'} />
        {Math.abs(change)}%
      </StatHelpText>
    </Stat>
  </Box>
);

const Dashboard = () => {
  const recentActivities = [
    { user: 'John Doe', action: 'Created new project', time: '2 minutes ago' },
    { user: 'Jane Smith', action: 'Updated profile', time: '5 minutes ago' },
    { user: 'Bob Johnson', action: 'Deleted task', time: '10 minutes ago' },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={8}>
        <StatCard label="Total Users" number="1,234" change={12} />
        <StatCard label="Active Users" number="891" change={-4} />
        <StatCard label="Revenue" number="$12,345" change={23} />
        <StatCard label="Conversion Rate" number="3.2%" change={8} />
      </SimpleGrid>

      <Box bg="white" p={5} shadow="md" borderRadius="lg">
        <Text fontSize="xl" mb={4}>Recent Activity</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Action</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {recentActivities.map((activity, index) => (
              <Tr key={index}>
                <Td>{activity.user}</Td>
                <Td>{activity.action}</Td>
                <Td>{activity.time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Dashboard;
