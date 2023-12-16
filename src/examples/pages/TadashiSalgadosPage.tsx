import Header from '../../components/Header/Header';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Container from '../../components/sections/Container';
import CenteredSection from '../../components/sections/Centered';
import { Body2, H2 } from '../../components/Typography';
import { Box } from '@mui/material';

export default function TadashiSalgadosPage() {
  return (
    <Box my={4}>
      <Header
        links={[
          { label: 'Sobre', url: ''},
          { label: 'Cardápio', url: ''},
          { label: 'Contato', url: ''},
        ]}
        ctaButtonAction={() => console.log('whatsapp')}
        ctaButtonLabel="Chamar no whatsapp"
        ctaButtonIcon={<ArrowRightAltIcon />}
      />

      <Container>
        <CenteredSection align="column-center" spacing={2}>
          <H2>SER TADASHI SALGADOS</H2>

          <Body2>A coxinha mais amada do Brasil</Body2>
        </CenteredSection>
      </Container>
    </Box>
  );
}
