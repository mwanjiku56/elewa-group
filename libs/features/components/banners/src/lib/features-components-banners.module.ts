import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonsModule } from '@elewa-group/features/components/buttons';

import { ElewaGroupImageAndTextBannerComponent } from './banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
import { ElewaGroupTeamMemberComponent } from './banners/elewa-group-team-member/elewa-group-team-member.component';
import { ElewaCallToActionBannerComponent } from './banners/elewa-call-to-action-banner/elewa-call-to-action-banner.component';
import { ElewaGroupBrandsComponent } from './banners/elewa-group-brands/elewa-group-brands/elewa-group-brands.component';

@NgModule({
  imports: [CommonModule, ButtonsModule, RouterModule],
  declarations: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
    ElewaCallToActionBannerComponent,
    ElewaGroupBrandsComponent,
  ],
  exports: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
    ElewaCallToActionBannerComponent,
  ],
})
export class BannersModule {}
