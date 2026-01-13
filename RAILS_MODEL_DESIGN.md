# Rails 8 모델 설계안

아래 설계는 Rails 8 기준으로 바로 적용 가능한 형태의 모델/마이그레이션 예시를 포함합니다. 필요에 따라 컬럼명을 조정해도 무방합니다.

## 모델 관계 요약

- `User` has many `BookProject`
- `BookProject` belongs to `User`
- `BookProject` has many `BlogPost`
- `BookProject` has many `Chapter`
- `BookProject` has many `Draft`
- `QuestProgress` belongs to `BookProject` (및 선택적으로 `User`와 1:1)

## 테이블 설계 (컬럼/타입/인덱스/제약)

### users
| 컬럼 | 타입 | 제약 | 설명 |
| --- | --- | --- | --- |
| id | bigint | PK | 기본 키 |
| email | string | null: false, unique index | 로그인 식별자 |
| name | string | null: false | 표시 이름 |
| badges | jsonb | null: false, default: {} | 사용자 배지 데이터 |
| created_at/updated_at | datetime | null: false | 기본 타임스탬프 |

**인덱스**
- `index_users_on_email` (unique)

### book_projects
| 컬럼 | 타입 | 제약 | 설명 |
| --- | --- | --- | --- |
| id | bigint | PK | 기본 키 |
| user_id | bigint | null: false, FK | 소유 사용자 |
| title | string | null: false | 프로젝트 제목 |
| description | text | null: true | 프로젝트 설명 |
| status | integer | null: false, default: 0 | enum: drafting/outline_ready/draft_generated |
| badges | jsonb | null: false, default: {} | 프로젝트 배지/메타 |
| created_at/updated_at | datetime | null: false | 기본 타임스탬프 |

**인덱스**
- `index_book_projects_on_user_id`
- `index_book_projects_on_status`

### blog_posts
| 컬럼 | 타입 | 제약 | 설명 |
| --- | --- | --- | --- |
| id | bigint | PK | 기본 키 |
| book_project_id | bigint | null: false, FK | 프로젝트 소속 |
| title | string | null: false | 제목 |
| body | text | null: false | 본문 |
| published_at | datetime | null: true | 발행 시각 |
| created_at/updated_at | datetime | null: false | 기본 타임스탬프 |

**인덱스**
- `index_blog_posts_on_book_project_id`
- `index_blog_posts_on_published_at`

### chapters
| 컬럼 | 타입 | 제약 | 설명 |
| --- | --- | --- | --- |
| id | bigint | PK | 기본 키 |
| book_project_id | bigint | null: false, FK | 프로젝트 소속 |
| title | string | null: false | 챕터 제목 |
| position | integer | null: false, default: 1 | 정렬 순서 |
| summary | text | null: true | 요약 |
| created_at/updated_at | datetime | null: false | 기본 타임스탬프 |

**인덱스**
- `index_chapters_on_book_project_id`
- `index_chapters_on_book_project_id_and_position` (unique)

### drafts
| 컬럼 | 타입 | 제약 | 설명 |
| --- | --- | --- | --- |
| id | bigint | PK | 기본 키 |
| book_project_id | bigint | null: false, FK | 프로젝트 소속 |
| storage_key | string | null: false | 저장 키 (S3 등) |
| file_name | string | null: false | 원본 파일명 |
| content_type | string | null: false | MIME 타입 |
| byte_size | bigint | null: false | 파일 크기 |
| checksum | string | null: false | 무결성 체크섬 |
| generated_at | datetime | null: true | 초안 생성 시각 |
| created_at/updated_at | datetime | null: false | 기본 타임스탬프 |

**인덱스**
- `index_drafts_on_book_project_id`
- `index_drafts_on_storage_key` (unique)

### quest_progresses
| 컬럼 | 타입 | 제약 | 설명 |
| --- | --- | --- | --- |
| id | bigint | PK | 기본 키 |
| user_id | bigint | null: false, FK | 소유 사용자 |
| book_project_id | bigint | null: false, FK | 프로젝트 소속 |
| progress | integer | null: false, default: 0 | 진행률(0~100) |
| metadata | jsonb | null: false, default: {} | 퀘스트 진행 메타 |
| completed_at | datetime | null: true | 완료 시각 |
| created_at/updated_at | datetime | null: false | 기본 타임스탬프 |

**인덱스**
- `index_quest_progresses_on_book_project_id`
- `index_quest_progresses_on_user_id_and_book_project_id` (unique)

> `QuestProgress`는 `User + BookProject` 조합으로 1개만 유지하도록 유니크 인덱스를 둡니다.

## Rails generate (바로 적용 가능한 예시)

```bash
bin/rails generate model User email:string name:string badges:jsonb

bin/rails generate model BookProject user:references title:string description:text status:integer badges:jsonb

bin/rails generate model BlogPost book_project:references title:string body:text published_at:datetime

bin/rails generate model Chapter book_project:references title:string position:integer summary:text

bin/rails generate model Draft book_project:references storage_key:string file_name:string content_type:string byte_size:bigint checksum:string generated_at:datetime

bin/rails generate model QuestProgress user:references book_project:references progress:integer metadata:jsonb completed_at:datetime
```

> 생성 후 마이그레이션에서 default/unique/index/enum 설정을 반영합니다.

## 마이그레이션 예시

### users
```ruby
class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.jsonb :badges, null: false, default: {}

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
```

### book_projects
```ruby
class CreateBookProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :book_projects do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.text :description
      t.integer :status, null: false, default: 0
      t.jsonb :badges, null: false, default: {}

      t.timestamps
    end

    add_index :book_projects, :status
  end
end
```

### blog_posts
```ruby
class CreateBlogPosts < ActiveRecord::Migration[8.0]
  def change
    create_table :blog_posts do |t|
      t.references :book_project, null: false, foreign_key: true
      t.string :title, null: false
      t.text :body, null: false
      t.datetime :published_at

      t.timestamps
    end

    add_index :blog_posts, :published_at
  end
end
```

### chapters
```ruby
class CreateChapters < ActiveRecord::Migration[8.0]
  def change
    create_table :chapters do |t|
      t.references :book_project, null: false, foreign_key: true
      t.string :title, null: false
      t.integer :position, null: false, default: 1
      t.text :summary

      t.timestamps
    end

    add_index :chapters, [:book_project_id, :position], unique: true
  end
end
```

### drafts
```ruby
class CreateDrafts < ActiveRecord::Migration[8.0]
  def change
    create_table :drafts do |t|
      t.references :book_project, null: false, foreign_key: true
      t.string :storage_key, null: false
      t.string :file_name, null: false
      t.string :content_type, null: false
      t.bigint :byte_size, null: false
      t.string :checksum, null: false
      t.datetime :generated_at

      t.timestamps
    end

    add_index :drafts, :storage_key, unique: true
  end
end
```

### quest_progresses
```ruby
class CreateQuestProgresses < ActiveRecord::Migration[8.0]
  def change
    create_table :quest_progresses do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book_project, null: false, foreign_key: true
      t.integer :progress, null: false, default: 0
      t.jsonb :metadata, null: false, default: {}
      t.datetime :completed_at

      t.timestamps
    end

    add_index :quest_progresses, [:user_id, :book_project_id], unique: true
  end
end
```

## 모델 코드 예시

### user.rb
```ruby
class User < ApplicationRecord
  has_many :book_projects, dependent: :destroy
  has_many :quest_progresses, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
end
```

### book_project.rb
```ruby
class BookProject < ApplicationRecord
  belongs_to :user

  has_many :blog_posts, dependent: :destroy
  has_many :chapters, dependent: :destroy
  has_many :drafts, dependent: :destroy
  has_one :quest_progress, dependent: :destroy

  enum status: { drafting: 0, outline_ready: 1, draft_generated: 2 }

  validates :title, presence: true
  validates :status, presence: true
end
```

### blog_post.rb
```ruby
class BlogPost < ApplicationRecord
  belongs_to :book_project

  validates :title, presence: true
  validates :body, presence: true
end
```

### chapter.rb
```ruby
class Chapter < ApplicationRecord
  belongs_to :book_project

  validates :title, presence: true
  validates :position, presence: true, numericality: { only_integer: true, greater_than: 0 }
end
```

### draft.rb
```ruby
class Draft < ApplicationRecord
  belongs_to :book_project

  validates :storage_key, :file_name, :content_type, :byte_size, :checksum, presence: true
  validates :byte_size, numericality: { only_integer: true, greater_than: 0 }
end
```

### quest_progress.rb
```ruby
class QuestProgress < ApplicationRecord
  belongs_to :user
  belongs_to :book_project

  validates :progress, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
end
```
