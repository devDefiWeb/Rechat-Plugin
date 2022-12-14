import { sortAgentListToFindBrokerage } from './get-brokrage-name'

describe('sortAgentListToFindBrokerage', () => {
  it('should works when there is inactive office', () => {
    const agentsList: ListingAgent[] = [
      {
        id: '0',
        email: '',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        mlsid: 'XXOCPARKALE',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '',
        nar_number: '',
        office_mui: 3443911261,
        status: 'Inactive',
        office_mlsid: 'XXMTF',
        work_phone: '',
        generational_name: null,
        matrix_unique_id: 1195965159,
        updated_at: 1639553759.69328,
        deleted_at: null,
        created_at: 1628961684.46683,
        mls: 'CRMLS',
        type: 'agent',
        office_id: '53f9a4b4-f94f-11eb-8ee0-0271a4acc769',
        secret_questions: [],
        office: {
          id: '53f9a4b4-f94f-11eb-8ee0-0271a4acc769',
          type: 'office',
          mls_id: 'MRML',
          name: 'CRMLS',
          long_name: 'CRMLS',
          address: '15325 Fairfield Ranch Road, Suite 200',
          phone: '909-859-2040',
          fax: '909-859-2050',
          city: 'Chino Hills',
          state: 'CA',
          postal_code: '91709',
          license_number: '00000001',
          email: 'NONE@CRMLS.ORG'
        }
      },
      {
        id: '1',
        email: '',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        mlsid: 'OCPARKALE',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '949.427.1350',
        nar_number: '',
        office_mui: 1421541404,
        status: 'Active',
        office_mlsid: 'OC05850',
        work_phone: '949.427.1350',
        generational_name: null,
        matrix_unique_id: 3945572980,
        updated_at: 1643041685.43417,
        deleted_at: null,
        created_at: 1628540945.87968,
        mls: 'CRMLS',
        type: 'agent',
        office_id: '55b60e96-f94f-11eb-827c-0271a4acc769',
        secret_questions: ['(949) XXX-XX50'],
        office: {
          id: '55b60e96-f94f-11eb-827c-0271a4acc769',
          type: 'office',
          mls_id: 'OC05850',
          name: 'Douglas Elliman of California',
          long_name: 'Douglas Elliman of California',
          address: '28202 Cabot Rd Ste510',
          phone: '949-354-0450',
          fax: '949-354-0450',
          city: 'Laguna Niguel',
          state: 'CA',
          postal_code: '92677',
          license_number: '01947727',
          email: ''
        }
      },
      {
        id: '2',
        email: 'Alex.Parker@Elliman.com',
        mlsid: 'OCPARKALE',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '949.427.1350',
        nar_number: '',
        office_mui: 469760432,
        status: 'Active',
        office_mlsid: '1334095',
        work_phone: '949-354-0450',
        generational_name: null,
        matrix_unique_id: 3739764429,
        updated_at: 1639621927.67206,
        deleted_at: null,
        created_at: 1631115461.14482,
        mls: 'CLAW',
        type: 'agent',
        office_id: 'b87464ba-0c5f-11ec-8f64-0271a4acc769',
        secret_questions: [
          '(949) XXX-XX50',
          '(949) XXX-XX50',
          'Alex.xxxxxxxxxxxxxn.com'
        ],
        office: {
          id: 'b87464ba-0c5f-11ec-8f64-0271a4acc769',
          type: 'office',
          mls_id: 'OC05850',
          name: 'Douglas Elliman of California',
          long_name: 'Douglas Elliman of California',
          address: '',
          phone: '949-354-0450',
          fax: '949-354-0450',
          city: 'Laguna Niguel',
          state: 'CA',
          postal_code: '92677',
          license_number: '01947727',
          email: ''
        }
      },
      {
        id: '3',
        email: 'Alex.Parker@Elliman.com',
        mlsid: '1036186',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '(949) 354-0450',
        nar_number: '',
        office_mui: 242476,
        status: 'Active',
        office_mlsid: '242476',
        work_phone: '949-354-0450',
        generational_name: null,
        matrix_unique_id: 1036186,
        updated_at: 1643041637.41336,
        deleted_at: null,
        created_at: 1634077300.35511,
        mls: 'MLSL',
        type: 'agent',
        office_id: '7ac47886-2bb2-11ec-8253-0271a4acc769',
        secret_questions: ['(949) XXX-XX50', 'Alex.xxxxxxxxxxxxxn.com'],
        office: {
          id: '7ac47886-2bb2-11ec-8253-0271a4acc769',
          type: 'office',
          mls_id: '242476',
          name: 'Douglas Elliman of California',
          long_name: '',
          address: '',
          phone: '949-354-0450',
          fax: '',
          city: 'Laguna Niguel',
          state: '5',
          postal_code: '',
          license_number: '',
          email: ''
        }
      }
    ]

    const actual = sortAgentListToFindBrokerage(agentsList, 'CRMLS')
    const expected = [
      agentsList[1],
      agentsList[3],
      agentsList[2],
      agentsList[0]
    ]

    expect(actual).toStrictEqual(expected)
  })

  it('should works when there is null office', () => {
    const agentsList: ListingAgent[] = [
      {
        id: '0',
        email: '',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        mlsid: 'XXOCPARKALE',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '',
        nar_number: '',
        office_mui: 3443911261,
        status: null,
        office_mlsid: 'XXMTF',
        work_phone: '',
        generational_name: null,
        matrix_unique_id: 1195965159,
        updated_at: 1639553759.69328,
        deleted_at: null,
        created_at: 1628961684.46683,
        mls: 'CRMLS',
        type: 'agent',
        office_id: '53f9a4b4-f94f-11eb-8ee0-0271a4acc769',
        secret_questions: [],
        office: {
          id: '53f9a4b4-f94f-11eb-8ee0-0271a4acc769',
          type: 'office',
          mls_id: 'MRML',
          name: 'CRMLS',
          long_name: 'CRMLS',
          address: '15325 Fairfield Ranch Road, Suite 200',
          phone: '909-859-2040',
          fax: '909-859-2050',
          city: 'Chino Hills',
          state: 'CA',
          postal_code: '91709',
          license_number: '00000001',
          email: 'NONE@CRMLS.ORG'
        }
      },
      {
        id: '1',
        email: '',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        mlsid: 'OCPARKALE',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '949.427.1350',
        nar_number: '',
        office_mui: 1421541404,
        status: 'Active',
        office_mlsid: 'OC05850',
        work_phone: '949.427.1350',
        generational_name: null,
        matrix_unique_id: 3945572980,
        updated_at: 1643041685.43417,
        deleted_at: null,
        created_at: 1628540945.87968,
        mls: 'CRMLS',
        type: 'agent',
        office_id: '55b60e96-f94f-11eb-827c-0271a4acc769',
        secret_questions: ['(949) XXX-XX50'],
        office: {
          id: '55b60e96-f94f-11eb-827c-0271a4acc769',
          type: 'office',
          mls_id: 'OC05850',
          name: 'Douglas Elliman of California',
          long_name: 'Douglas Elliman of California',
          address: '28202 Cabot Rd Ste510',
          phone: '949-354-0450',
          fax: '949-354-0450',
          city: 'Laguna Niguel',
          state: 'CA',
          postal_code: '92677',
          license_number: '01947727',
          email: ''
        }
      },
      {
        id: '2',
        email: 'Alex.Parker@Elliman.com',
        mlsid: 'OCPARKALE',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '949.427.1350',
        nar_number: '',
        office_mui: 469760432,
        status: 'Active',
        office_mlsid: '1334095',
        work_phone: '949-354-0450',
        generational_name: null,
        matrix_unique_id: 3739764429,
        updated_at: 1639621927.67206,
        deleted_at: null,
        created_at: 1631115461.14482,
        mls: 'CLAW',
        type: 'agent',
        office_id: 'b87464ba-0c5f-11ec-8f64-0271a4acc769',
        secret_questions: [
          '(949) XXX-XX50',
          '(949) XXX-XX50',
          'Alex.xxxxxxxxxxxxxn.com'
        ],
        office: {
          id: 'b87464ba-0c5f-11ec-8f64-0271a4acc769',
          type: 'office',
          mls_id: 'OC05850',
          name: 'Douglas Elliman of California',
          long_name: 'Douglas Elliman of California',
          address: '',
          phone: '949-354-0450',
          fax: '949-354-0450',
          city: 'Laguna Niguel',
          state: 'CA',
          postal_code: '92677',
          license_number: '01947727',
          email: ''
        }
      },
      {
        id: '3',
        email: 'Alex.Parker@Elliman.com',
        mlsid: '1036186',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '(949) 354-0450',
        nar_number: '',
        office_mui: 242476,
        status: 'Active',
        office_mlsid: '242476',
        work_phone: '949-354-0450',
        generational_name: null,
        matrix_unique_id: 1036186,
        updated_at: 1643041637.41336,
        deleted_at: null,
        created_at: 1634077300.35511,
        mls: 'MLSL',
        type: 'agent',
        office_id: '7ac47886-2bb2-11ec-8253-0271a4acc769',
        secret_questions: ['(949) XXX-XX50', 'Alex.xxxxxxxxxxxxxn.com'],
        office: {
          id: '7ac47886-2bb2-11ec-8253-0271a4acc769',
          type: 'office',
          mls_id: '242476',
          name: 'Douglas Elliman of California',
          long_name: '',
          address: '',
          phone: '949-354-0450',
          fax: '',
          city: 'Laguna Niguel',
          state: '5',
          postal_code: '',
          license_number: '',
          email: ''
        }
      }
    ]

    const actual = sortAgentListToFindBrokerage(agentsList, 'CRMLS')
    const expected = [
      agentsList[1],
      agentsList[3],
      agentsList[2],
      agentsList[0]
    ]

    expect(actual).toStrictEqual(expected)
  })

  it('should works when all status are null', () => {
    const agentsList: ListingAgent[] = [
      {
        id: '0',
        email: 'Alex.Parker@Elliman.com',
        mlsid: 'OCPARKALE',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '949.427.1350',
        nar_number: '',
        office_mui: 469760432,
        status: null,
        office_mlsid: '1334095',
        work_phone: '949-354-0450',
        generational_name: null,
        matrix_unique_id: 3739764429,
        updated_at: 1639621927.67206,
        deleted_at: null,
        created_at: 1631115461.14482,
        mls: 'CLAW',
        type: 'agent',
        office_id: 'b87464ba-0c5f-11ec-8f64-0271a4acc769',
        secret_questions: [
          '(949) XXX-XX50',
          '(949) XXX-XX50',
          'Alex.xxxxxxxxxxxxxn.com'
        ],
        office: {
          id: 'b87464ba-0c5f-11ec-8f64-0271a4acc769',
          type: 'office',
          mls_id: 'OC05850',
          name: 'Douglas Elliman of California',
          long_name: 'Douglas Elliman of California',
          address: '',
          phone: '949-354-0450',
          fax: '949-354-0450',
          city: 'Laguna Niguel',
          state: 'CA',
          postal_code: '92677',
          license_number: '01947727',
          email: ''
        }
      },
      {
        id: '1',
        email: 'Alex.Parker@Elliman.com',
        mlsid: '1036186',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '(949) 354-0450',
        nar_number: '',
        office_mui: 242476,
        status: null,
        office_mlsid: '242476',
        work_phone: '949-354-0450',
        generational_name: null,
        matrix_unique_id: 1036186,
        updated_at: 1643041637.41336,
        deleted_at: null,
        created_at: 1634077300.35511,
        mls: 'MLSL',
        type: 'agent',
        office_id: '7ac47886-2bb2-11ec-8253-0271a4acc769',
        secret_questions: ['(949) XXX-XX50', 'Alex.xxxxxxxxxxxxxn.com'],
        office: {
          id: '7ac47886-2bb2-11ec-8253-0271a4acc769',
          type: 'office',
          mls_id: '242476',
          name: 'Douglas Elliman of California',
          long_name: '',
          address: '',
          phone: '949-354-0450',
          fax: '',
          city: 'Laguna Niguel',
          state: '5',
          postal_code: '',
          license_number: '',
          email: ''
        }
      },
      {
        id: '2',
        email: '',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        mlsid: 'XXOCPARKALE',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '',
        nar_number: '',
        office_mui: 3443911261,
        status: null,
        office_mlsid: 'XXMTF',
        work_phone: '',
        generational_name: null,
        matrix_unique_id: 1195965159,
        updated_at: 1639553759.69328,
        deleted_at: null,
        created_at: 1628961684.46683,
        mls: 'CRMLS',
        type: 'agent',
        office_id: '53f9a4b4-f94f-11eb-8ee0-0271a4acc769',
        secret_questions: [],
        office: {
          id: '53f9a4b4-f94f-11eb-8ee0-0271a4acc769',
          type: 'office',
          mls_id: 'MRML',
          name: 'CRMLS',
          long_name: 'CRMLS',
          address: '15325 Fairfield Ranch Road, Suite 200',
          phone: '909-859-2040',
          fax: '909-859-2050',
          city: 'Chino Hills',
          state: 'CA',
          postal_code: '91709',
          license_number: '00000001',
          email: 'NONE@CRMLS.ORG'
        }
      },
      {
        id: '3',
        email: '',
        user_id: '',
        profile_image_url: '',
        cover_image_url: '',
        mlsid: 'OCPARKALE',
        fax: null,
        full_name: 'Alex Parker',
        first_name: 'Alex',
        last_name: 'Parker',
        middle_name: '',
        phone_number: '949.427.1350',
        nar_number: '',
        office_mui: 1421541404,
        status: null,
        office_mlsid: 'OC05850',
        work_phone: '949.427.1350',
        generational_name: null,
        matrix_unique_id: 3945572980,
        updated_at: 1643041685.43417,
        deleted_at: null,
        created_at: 1628540945.87968,
        mls: 'CRMLS',
        type: 'agent',
        office_id: '55b60e96-f94f-11eb-827c-0271a4acc769',
        secret_questions: ['(949) XXX-XX50'],
        office: {
          id: '55b60e96-f94f-11eb-827c-0271a4acc769',
          type: 'office',
          mls_id: 'OC05850',
          name: 'Douglas Elliman of California',
          long_name: 'Douglas Elliman of California',
          address: '28202 Cabot Rd Ste510',
          phone: '949-354-0450',
          fax: '949-354-0450',
          city: 'Laguna Niguel',
          state: 'CA',
          postal_code: '92677',
          license_number: '01947727',
          email: ''
        }
      }
    ]

    const actual = sortAgentListToFindBrokerage(agentsList, 'CRMLS')
    const expected = [
      agentsList[3],
      agentsList[2],
      agentsList[1],
      agentsList[0]
    ]

    expect(actual).toStrictEqual(expected)
  })
})
