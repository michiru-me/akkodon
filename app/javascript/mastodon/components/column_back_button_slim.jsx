import { FormattedMessage } from 'react-intl';

import { ReactComponent as ArrowBackIcon } from '@material-symbols/svg-600/outlined/arrow_back.svg';

import { Icon }  from 'mastodon/components/icon';

import { ColumnBackButton } from './column_back_button';

export default class ColumnBackButtonSlim extends ColumnBackButton {
  render () {
    return (
      <div className='column-back-button--slim'>
        <div role='button' tabIndex={0} onClick={this.handleClick} className='column-back-button column-back-button--slim-button'>
          <Icon id='chevron-left' icon={ArrowBackIcon} className='column-back-button__icon' />
          <FormattedMessage id='column_back_button.label' defaultMessage='Back' />
        </div>
      </div>
    );
  }
}
