import { forwardRef, ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';
import { Head } from "next/document";

interface PageProps extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
  suffix: string;
  separator: string;
}

export const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  const {children, title = '', separator = '|', suffix = '', meta, ...other} = props;

  return (
      <>
        <Head>
          <title>{`${title} ${suffix ? separator : ''} ${suffix}`}</title>
          {meta}
        </Head>

        <Box ref={ref} {...other}>
          {children}
        </Box>
      </>
  )
})
