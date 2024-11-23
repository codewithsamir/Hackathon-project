import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({ breadcrumbs }: { breadcrumbs: any }) {
  return (
    <div role="presentation" onClick={handleClick} className='p-2'>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb: any, index: number) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <Typography key={index} sx={{ color: 'text.primary' }}>
                {breadcrumb}
              </Typography>
            );
          } else {
            return (
              <Link
                key={index}
                underline="hover"
                color="inherit"
                href={breadcrumb}
              >
                {breadcrumb}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
}
