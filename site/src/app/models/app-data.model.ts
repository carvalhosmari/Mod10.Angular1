import { AboutSectionData } from './about-section-data.model';
import { AddressSectionData } from './address-section-data.model';
import { FeatureSectionData } from './feature-section-data.model';

export interface AppData {
  features: FeatureSectionData,
  about: AboutSectionData,
  address: AddressSectionData
}
