
import { clientOnboardingUseCase } from './clientOnboarding';
import { clientFeedbackUseCase } from './clientFeedback';
import { clientSupportUseCase } from './clientSupport';
import { meetingSummarizerUseCase } from './meetingSummarizer';

// Export all client interaction use cases as a single array
export const clientInteractionUseCases = [
  clientOnboardingUseCase,
  clientFeedbackUseCase,
  clientSupportUseCase,
  meetingSummarizerUseCase
];
